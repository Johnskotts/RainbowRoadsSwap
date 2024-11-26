use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

declare_id!("4hYVVzpRwavZsZULJqA6Ztit4HQgFSPQAsosaZ1DBAa6");

#[program]
pub mod solana_swap {
    use super::*;

    pub fn swap(ctx: Context<Swap>, amount_in: u64, amount_out_min: u64) -> Result<()> {
        let fee_percentage = 3; // 3% fee

        // Calculate fee and net amount
        let fee = amount_in * fee_percentage / 100;
        let net_amount_in = amount_in - fee;

        // Transfer the fee to the fee_wallet
        let fee_transfer_accounts = Transfer {
            from: ctx.accounts.user_token_a_account.to_account_info(),
            to: ctx.accounts.fee_wallet.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let fee_transfer_ctx = CpiContext::new(cpi_program.clone(), fee_transfer_accounts);
        token::transfer(fee_transfer_ctx, fee)?;

        // Transfer the net amount_in to the pool_token_a_account
        let net_transfer_accounts = Transfer {
            from: ctx.accounts.user_token_a_account.to_account_info(),
            to: ctx.accounts.pool_token_a_account.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        let net_transfer_ctx = CpiContext::new(cpi_program.clone(), net_transfer_accounts);
        token::transfer(net_transfer_ctx, net_amount_in)?;

        // Simulate token swapping logic (example: 1:1 ratio)
        let amount_out = net_amount_in; // Replace with actual pool logic
        require!(amount_out >= amount_out_min, SwapError::InsufficientOutput);

        // Transfer the output tokens to the user
        let out_transfer_accounts = Transfer {
            from: ctx.accounts.pool_token_b_account.to_account_info(),
            to: ctx.accounts.user_token_b_account.to_account_info(),
            authority: ctx.accounts.pool_authority.to_account_info(),
        };
        let out_transfer_ctx = CpiContext::new(cpi_program, out_transfer_accounts);
        token::transfer(out_transfer_ctx, amount_out)?;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Swap<'info> {
    #[account(mut)]
    pub user: Signer<'info>, // The user performing the swap
    #[account(mut)]
    pub user_token_a_account: Account<'info, TokenAccount>, // User's Token A account
    #[account(mut)]
    pub user_token_b_account: Account<'info, TokenAccount>, // User's Token B account
    #[account(mut)]
    pub pool_token_a_account: Account<'info, TokenAccount>, // Pool's Token A account
    #[account(mut)]
    pub pool_token_b_account: Account<'info, TokenAccount>, // Pool's Token B account
    #[account(mut)]
    pub fee_wallet: Account<'info, TokenAccount>, // Wallet to collect fees
    #[account()]
    pub pool_authority: Signer<'info>, // Pool's authority for Token B transfers
    pub token_program: Program<'info, Token>, // SPL Token program
}

#[error_code]
pub enum SwapError {
    #[msg("Insufficient output amount.")]
    InsufficientOutput,
}

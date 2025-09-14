"use client"
import { Button } from "@/components/ui/button"
import MonkeyIcon from "@/components/icons/monkey"
import GearIcon from "@/components/icons/gear"
import { cn } from "@/lib/utils"
import { WalletConnectButton } from "./wallet-connect-button"

const navItems = [
  { name: "Trade", active: true },
  { name: "Vaults", active: false },
  { name: "Portfolio", active: false },
  { name: "Staking", active: false },
  { name: "Referrals", active: false },
  { name: "Leaderboard", active: false },
  { name: "More", active: false },
]

export default function TradingNavbar() {
  return (
    <nav className="w-full bg-background border-b border-border px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left: Logo and Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <MonkeyIcon className="size-6 text-primary" />
              <span className="text-xl font-display">M.O.N.K.Y</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  item.active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Connect Button and Settings */}
        <div className="flex items-center gap-3">
          <WalletConnectButton />
          <Button variant="ghost" size="icon">
            <GearIcon className="size-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useAccount, useBalance } from "wagmi"
import { WalletConnectButton } from "./wallet-connect-button"

export default function TradingPanel() {
  const [orderType, setOrderType] = useState<"Market" | "Limit">("Market")
  const [side, setSide] = useState<"Buy" | "Sell">("Buy")

  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address,
    query: {
      enabled: !!address,
    },
  })

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {(["Market", "Limit"] as const).map((type) => (
              <Button
                key={type}
                variant={orderType === type ? "default" : "ghost"}
                size="sm"
                onClick={() => setOrderType(type)}
                className="text-xs"
              >
                {type}
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="text-xs">
            Pro
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Buy/Sell Toggle */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-muted rounded">
          {(["Buy", "Sell"] as const).map((option) => (
            <Button
              key={option}
              variant={side === option ? "default" : "ghost"}
              size="sm"
              onClick={() => setSide(option)}
              className={cn(
                "text-xs",
                side === option && option === "Buy" && "bg-success hover:bg-success/90",
                side === option && option === "Sell" && "bg-destructive hover:bg-destructive/90",
              )}
            >
              {option}
            </Button>
          ))}
        </div>

        {/* Available to Trade */}
        <div className="text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Available to Trade</span>
            <span className="font-mono">
              {isConnected && balance
                ? `${Number.parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}`
                : "0.00 USDC"}
            </span>
          </div>
        </div>

        {/* Size Input */}
        <div className="space-y-2">
          <Label htmlFor="size" className="text-xs">
            Size
          </Label>
          <div className="relative">
            <Input id="size" placeholder="0" className="pr-12 font-mono" disabled={!isConnected} />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">HYPE</div>
          </div>
          <div className="flex justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-muted-foreground flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground text-center">0 %</div>
        </div>

        {!isConnected ? (
          <WalletConnectButton />
        ) : (
          <Button
            className={cn(
              "w-full",
              side === "Buy" ? "bg-success hover:bg-success/90" : "bg-destructive hover:bg-destructive/90",
            )}
          >
            {side} HYPE
          </Button>
        )}

        {/* Order Details */}
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order Value</span>
            <span className="font-mono">N/A</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Slippage</span>
            <span className="font-mono">Est: 0% / Max: 8.00%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Fees</span>
            <span className="font-mono">🐒 0.0600% / 0.0300%</span>
          </div>
        </div>

        {isConnected && address && (
          <div className="pt-2 border-t border-border">
            <div className="text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Wallet</span>
                <span className="font-mono">
                  {address.slice(0, 6)}...{address.slice(-4)}
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

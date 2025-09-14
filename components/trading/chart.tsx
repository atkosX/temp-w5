"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function TradingChart() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-display">HYPE/USDC</span>
              <Badge variant="secondary" className="text-xs">
                Spot
              </Badge>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">Price</span>
                <div className="font-mono">54.535</div>
              </div>
              <div>
                <span className="text-muted-foreground">24h Change</span>
                <div className="font-mono text-destructive">-1.478 / -2.64%</div>
              </div>
              <div>
                <span className="text-muted-foreground">24h Volume</span>
                <div className="font-mono">225,458,159.96 USDC</div>
              </div>
              <div>
                <span className="text-muted-foreground">Market Cap</span>
                <div className="font-mono">18,356,624,204 USDC</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              5m
            </Button>
            <Button variant="ghost" size="sm">
              1h
            </Button>
            <Button variant="ghost" size="sm" className="bg-accent">
              D
            </Button>
            <Button variant="ghost" size="sm">
              Indicators
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-96 bg-muted/20 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-2xl font-mono mb-2">📈</div>
            <div>Trading Chart</div>
            <div className="text-sm">HYPE/USDC-107 • 1h • Hyperliquid</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

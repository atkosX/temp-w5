"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const orderBookData = {
  asks: [
    { price: 54.559, size: 34.08, total: 702.39 },
    { price: 54.558, size: 52.93, total: 668.31 },
    { price: 54.556, size: 239.03, total: 615.38 },
    { price: 54.555, size: 29.41, total: 376.35 },
    { price: 54.551, size: 1.98, total: 346.94 },
  ],
  bids: [
    { price: 54.549, size: 110.84, total: 344.96 },
    { price: 54.547, size: 42.48, total: 234.12 },
    { price: 54.546, size: 10.57, total: 191.64 },
    { price: 54.545, size: 12.5, total: 181.07 },
    { price: 54.543, size: 9.17, total: 168.57 },
  ],
  spread: { value: 0.008, percentage: 0.015 },
}

export default function OrderBook() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center border-b border-border">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium border-b-2 border-primary rounded-none px-4 py-2"
          >
            Order Book
          </Button>
          <Button variant="ghost" size="sm" className="text-sm text-muted-foreground px-4 py-2 rounded-none">
            TRADES
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground pt-3 pb-1 px-1">
          <span>Price (HYPE)</span>
          <span className="text-right">Size (HYPE)</span>
          <span className="text-right">Total (HYPE)</span>
        </div>
      </CardHeader>

      <CardContent className="p-0 space-y-0">
        <div className="space-y-0">
          {orderBookData.asks.reverse().map((ask, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 px-4 py-1 text-xs font-mono hover:bg-destructive/5">
              <span className="text-red-400">{ask.price.toFixed(3)}</span>
              <span className="text-right">{ask.size.toFixed(2)}</span>
              <span className="text-right">{ask.total.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="px-4 py-2 bg-muted/10 border-y border-border/50">
          <div className="grid grid-cols-3 gap-4 text-xs">
            <span className="text-muted-foreground">Spread</span>
            <span className="font-mono text-right">{orderBookData.spread.value.toFixed(3)}</span>
            <span className="font-mono text-right">{orderBookData.spread.percentage.toFixed(3)}%</span>
          </div>
        </div>

        <div className="space-y-0">
          {orderBookData.bids.map((bid, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 px-4 py-1 text-xs font-mono hover:bg-green-500/5">
              <span className="text-green-400">{bid.price.toFixed(3)}</span>
              <span className="text-right">{bid.size.toFixed(2)}</span>
              <span className="text-right">{bid.total.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

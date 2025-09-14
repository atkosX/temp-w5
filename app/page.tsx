import TradingNavbar from "@/components/trading/navbar"
import TradingChart from "@/components/trading/chart"
import OrderBook from "@/components/trading/orderbook"
import TradingPanel from "@/components/trading/trading-panel"

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TradingNavbar />

      <div className="flex h-[calc(100vh-73px)]">
        {/* Trading Chart - Left Section */}
        <div className="flex-1 p-4">
          <TradingChart />
        </div>

        {/* Order Book - Center Section */}
        <div className="w-80 p-4 pl-0">
          <OrderBook />
        </div>

        {/* Trading Panel - Right Section */}
        <div className="w-80 p-4 pl-0">
          <TradingPanel />
        </div>
      </div>
    </div>
  )
}

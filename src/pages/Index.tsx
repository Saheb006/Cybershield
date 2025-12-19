import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { TrackerFeed } from "@/components/TrackerFeed";
import { ProtectionToggle } from "@/components/ProtectionToggle";
import { Shield, Eye, Globe, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Header
        title="Dashboard"
        subtitle="Monitor your browsing protection in real-time"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Trackers Blocked Today"
          value="2,847"
          icon={Shield}
          variant="success"
          trend={{ value: 12, positive: true }}
        />
        <StatCard
          title="Sites Protected"
          value="156"
          icon={Globe}
          variant="default"
          trend={{ value: 8, positive: true }}
        />
        <StatCard
          title="Fingerprint Attempts"
          value="89"
          icon={Eye}
          variant="warning"
          trend={{ value: 23, positive: false }}
        />
        <StatCard
          title="Threats Detected"
          value="12"
          icon={AlertTriangle}
          variant="destructive"
          subtitle="Action recommended"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrackerFeed />
        </div>
        <div>
          <ProtectionToggle />
        </div>
      </div>
    </Layout>
  );
};

export default Index;

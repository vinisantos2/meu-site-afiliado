import { Suspense } from "react";
import Loading from "../components/Loading";
import DashboardClient from "./DashboardClient";

export default function AdminPage() {
  return (
    <Suspense fallback={<Loading />}>
      <DashboardClient />
    </Suspense>
  );
}

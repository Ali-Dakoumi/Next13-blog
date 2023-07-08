import { CircularProgress } from "../../components/MUI/Proxy";

export default  function Loading({}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-24 px-10">
      <CircularProgress />
    </div>
  )
}


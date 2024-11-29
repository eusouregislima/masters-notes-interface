import { Button } from "./components/ui/button";

export function App() {
  return (
    <main className="flex flex-col h-screen gap-2 w-full items-center justify-center">
      <h1 className="font-semibold text-2xl text-zinc-700">Hello Masters</h1>
      <Button size="sm" variant="secondary">
        Clique em mim
      </Button>
      <Button size="lg">
        Clique em mim
      </Button>
      <Button variant="destructive">
        Clique em mim
      </Button>
      <Button variant="ghost">
        Clique em mim
      </Button>
      <Button variant="outline">
        Clique em mim
      </Button>
      <Button variant="link">
        Clique em mim
      </Button>
    </main>
  )
}

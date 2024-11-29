import { Logo } from '@/components/native/logo';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className="mx-auto flex flex-col w-full max-w-screen-lg">
      <header className="px-8 py-6 border-b w-full">
        <Logo />
      </header>
      <Outlet />
    </main>
  );
}

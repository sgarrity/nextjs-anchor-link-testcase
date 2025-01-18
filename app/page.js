import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>Home page</h1>
        <p><Link href="/foobar">Go to Foobar</Link></p>
        
        <p><a href="#anchor">Anchor example</a></p>
    </div>
  );
}

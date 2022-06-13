interface NavbarRouteProps {
  text: string;
  href: string;
}

export default function NavbarRoute(props: NavbarRouteProps) {
  return (
    <li className="font-sans font-bold text-zinc-400 focus:text-black hover:text-black">
      <a href={props.href} className="focus:outline-none focus:text-black">
        {props.text}
      </a>
    </li>
  );
}

import classNames from "classnames";
import Logo from "./logo.component";
import SearchBar from "./search-bar.component";

export default function NavBar({ className }: { className?: string }) {
    return (
        <nav className={classNames("sticky flex items-center py-5", className)}>
            <Logo className="mr-auto" />
            <SearchBar />
        </nav>
    );
}
import { FiHome } from "react-icons/fi"
import { FaCat, FaYinYang } from "react-icons/fa"
import { CgNotes } from "react-icons/cg"
import { ImOffice, ImBooks } from "react-icons/im"

export const LinkItems = [
    { name: "Home", route: "/", icon: FiHome },
    { name: "Notes", route: "/notes", icon: CgNotes },
    { name: "The Office", route: "/office", icon: ImOffice },
    { name: "Marvel", route: "/marvel", icon: ImBooks },
    { name: "Avatar", route: "/avatar", icon: FaYinYang },
    { name: "Cats", route: "/cats", icon: FaCat },
]

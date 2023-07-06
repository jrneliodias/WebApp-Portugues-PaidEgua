
import { menuRoute } from "@/app/data/routeData"
import Link from "next/link"


export default function MenuRoutes() {



    return (
        <div className="container flex flex-col overflow-y-auto">
            <div className="title-text-format">
                <span>
                    <b> Menu de Páginas</b>
                </span>
            </div>
            <div className=" flex flex-col m-5 gap-2 ">

                {menuRoute.map((item, index) => (
                    <Link key={index} href={item.route} className="rounded-lg p-2 bg-cardcolor hover:bg-navApp">
                        {item.page}
                    </Link>
                ))}

            </div>

        </div>


    )

}

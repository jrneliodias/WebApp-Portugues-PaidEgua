
import { routeData } from "@/app/data/routeData"
import Link from "next/link"


export default function MenuRoutes() {



    return (
        <div className="main-layout">
            <div className="title-text-format">
                <span>
                    <b> Menu de Páginas</b>
                </span>
            </div>
            <div className=" flex flex-col m-5 gap-2 w-full">

                { routeData.map((item, index) => (
                   item.page && (<Link key={index} href={item.route} className="rounded-lg p-2 bg-cardcolor hover:bg-navApp">
                        {item?.page}
                    </Link>)
                ))}

            </div>

        </div>


    )

}

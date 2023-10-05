import info from '../client.json'
import Image from "next/image";
import Link from "next/link";

export function Logos() {
    return (
        <section className={`logos max-width`}>
            <div>
                <h2>Happy clients</h2>
                <div className={`logo-images`}>
                    {info.logos.map((logo, k) =>

                        <Link key={k} href={logo.clientUrl} rel={`nofollow noreferrer`} target={`_blank`}>
                            <Image
                                src={logo.imageUrl}
                                alt={logo.imageDescription}
                                width={100}
                                height={100}
                            />
                        </Link>

                    )}
                </div>
            </div>
        </section>
    )
}

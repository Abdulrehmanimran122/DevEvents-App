import EventDetails from "@/components/EventDetails";
import { Suspense } from "react";

const EventCardDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = params.then((p) => p.slug);

    return (
        <main>
            <Suspense fallback={<div className="flex items-center justify-center space-x-2 mb-8 h-full">

                <div className="w-4 h-4 bg-gradient-to-r from-primary to-chart-2 rounded-full animate-bounce shadow-lg shadow-purple-500/30"></div>
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-chart-2 rounded-full animate-bounce shadow-lg shadow-purple-500/30 animation-delay-150"></div>
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-chart-2 rounded-full animate-bounce shadow-lg shadow-purple-500/30 animation-delay-300"></div>
            </div>}>

            <EventDetails params={slug} />
            </Suspense>




        </main>
    )
}

export default EventCardDetailPage
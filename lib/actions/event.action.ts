"use server"

import Event from "@/database/event.model";
import connectDB from "../mongodb";

export const getSimilarEventsBySlug = async (slug: string) => {
    try {
        await connectDB();
        const event = await Event.findOne({ slug })
        const similarEvent = await Event.find({ _id: { $ne: event.id }, tags: { $in: event.tags } }).lean()
        return similarEvent;

    } catch (error) {
        return [];
    }
}
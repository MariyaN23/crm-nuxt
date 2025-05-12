import {useQuery} from "@tanstack/vue-query";
import {COLLECTION_DEALS, DB_ID} from "~/app.constants";
import {BOARD_DATA} from "~/components/board/board.data";
import type {ICard} from "~/components/board/board.types";

export function useBoardQuery() {
    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
        select(data) {
            const newBoard = BOARD_DATA.map(column => ({
                ...column,
                items: [] as ICard[]
            }))
        },
    })
}
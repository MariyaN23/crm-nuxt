import type {IColumn} from "~/components/board/board.types";
import {EnumStatus} from "~/types/deals.types";

export const BOARD_DATA: IColumn[] = [
    {id: EnumStatus.todo, name: 'Incoming', items: []},
    {id: EnumStatus["to-be-agreed"], name: 'Under approval', items: []},
    {id: EnumStatus["in-progress"], name: 'In progress', items: []},
    {id: EnumStatus.produced, name: 'Produced', items: []},
    {id: EnumStatus.done, name: 'Ready for shipment', items: []},
]
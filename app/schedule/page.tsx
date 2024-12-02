'use client'

import { DndProvider } from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend'
import DragDrop from "./components/ScheduleTable/DragDrop";

export default function ScheduleHomePage() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>Schedule Home page</div>
            <DragDrop />
        </DndProvider>
    );
};
  
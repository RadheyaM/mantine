import {Text, Paper} from '@mantine/core'
import { useDrag } from 'react-dnd'

export default function DragDropItemPaper(product) {
    const id = product.id
    const [{isDragging}, drag] = useDrag(() => ({
        type: "DragDropItemPaper",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
    return(
        <Paper
            w={{ base: 100, sm: 200, lg: 250 }}
            py={{ base: 'xs', sm: 'md', lg: 'xl' }}
            ta="center"
            mt={4}
            p={16}
            ref={drag}
            key={product.id}
            bg={ isDragging ? 'blue.7' : 'red.7'}
            >
            <Text>{product.productId}</Text>
            <Text>{product.productName}</Text>
        </Paper>
    )
}
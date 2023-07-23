'use client'
import React, { useCallback } from 'react'
import ReactFlow, {
  addEdge,
  useEdgesState,
  useNodesState,
  MiniMap,
  Controls,
  Background,
  NodeResizer,
  NodeToolbar,
} from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 50, y: 50 }, data: { label: <h6>hello world</h6> }, type: 'input' },
  { id: '2', position: { x: 50, y: 150 }, data: { label: 'seconbd one' } },
  { id: '3', position: { x: 50, y: 250 }, data: { label: 'etapa 3' } },
  { id: '4', position: { x: 50, y: 350 }, data: { label: 'Etapa 4' }, type: 'output' },
]
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-1', source: '2', target: '3', animated: true },
]

const FlowsPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const defaultEdgeOptions = { animated: true }

  const onConnect = useCallback(
    (connection) => setEdges((edge) => addEdge({ ...connection }, edge)),
    [setEdges]
  )

  return (
    <>
      <div style={{ width: '100vw', height: '90vh' }}>
        <ReactFlow
          //Para traer el valor de los nodos
          nodes={nodes}
          //Para traer el valor de los edges(conectores)
          edges={edges}
          //Para la funcion de mover los nodos
          onNodesChange={onNodesChange}
          //Para la funcion de mover los edges(conectores)
          onEdgesChange={onEdgesChange}
          //Para la funcion de conectar los nodos
          onConnect={onConnect}
          //Para que los edges(conectores) sean animados por defecto
          defaultEdgeOptions={defaultEdgeOptions}
        >
          {/* CONTROLS --> para agregar los controles de zoom, centrar, y bloquear la vista */}
          <Controls />
          {/* MINIMAP --> para mostrar un mapa pequeno en la parte inferior */}
          <MiniMap />
          {/* BACKGROUND --> para el diseno del tablero */}
          <Background
            //existen las variantes dots, lines,
            variant='lines'
            gap={12}
            size={1}
          />
          <NodeToolbar />
          {/* <NodeResizer /> */}
        </ReactFlow>
      </div>
    </>
  )
}

export default FlowsPage

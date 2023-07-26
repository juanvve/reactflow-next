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
import { initialEdges } from '@/components/flows/edges'
import { initialNodes } from '@/components/flows/nodes'

const FlowsPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const defaultEdgeOptions = { type: 'step' }
  // const defaultNodeOptions = { type: 'input' }

  const onConnect = useCallback(
    (connection) => setEdges((edge) => addEdge({ ...connection }, edge)),
    [setEdges]
  )

  console.log('nodes', nodes)
  console.log('edges', edges)

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
          //Para darle estilo al tablero
          // style={{ backgroundColor: '#787878' }}
          //Para iniciar la vista en el centro del tablero
          fitView
        >
          {/* CONTROLS --> para agregar los controles de zoom, centrar, y bloquear la vista */}
          <Controls />
          {/* MINIMAP --> para mostrar un mapa pequeno en la parte inferior */}
          <MiniMap />
          {/* BACKGROUND --> para el diseno del tablero */}
          <Background
            //existen las variantes dots, lines, cross
            variant='cross'
            // color='#767676'
            back
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

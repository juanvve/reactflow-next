'use client'
import React from 'react'
import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'primer nodo' } },
  { id: '2', position: { x: 150, y: 100 }, data: { label: 'seconbd one' } },
]
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-1', source: '2', target: '1' },
]

const FlowsPage = () => {
  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
        />
      </div>
    </>
  )
}

export default FlowsPage

import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import PDFPageRenderer from './PDFPageRenderer';

const PageThumbnails = ({ 
  pdfFile, 
  pageCount, 
  selectedPages, 
  onSelectPage, 
  onReorder,
  rotations
}) => {
  const pages = Array.from({ length: pageCount }, (_, i) => i);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const newOrder = Array.from(pages);
    const [removed] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, removed);
    
    onReorder(newOrder);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="pages" direction="horizontal">
        {(provided) => (
          <div 
            className="page-thumbnails"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {pages.map((pageIndex, index) => (
              <Draggable 
                key={`page-${pageIndex}`} 
                draggableId={`page-${pageIndex}`} 
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <PDFPageRenderer
                      pdfFile={pdfFile}
                      pageNumber={pageIndex + 1}
                      scale={0.25}
                      isSelected={selectedPages.includes(pageIndex)}
                      isDeleting={false}
                      onSelect={() => onSelectPage(pageIndex)}
                    />
                    {rotations[pageIndex] !== 0 && (
                      <div className="rotation-badge">{rotations[pageIndex]}°</div>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PageThumbnails;

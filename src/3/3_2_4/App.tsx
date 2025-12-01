// 3_2_4 Implement multiple selection - Changed state to support multiple selections using Set
import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  
      function handleToggle(toggledId: number) {
          setSelectedIds(prevSelectedIds => {
              const newSelectedIds = new Set(prevSelectedIds);
              if (newSelectedIds.has(toggledId)) {
                  newSelectedIds.delete(toggledId);
              } else {
                  newSelectedIds.add(toggledId);
              }
              return newSelectedIds;
          });
      }
  
      const selectedCount = selectedIds.size;
  
      return (
          <>
              <h2>Inbox</h2>
              <ul>
                  {letters.map(letter => (
                      <Letter
                          key={letter.id}
                          letter={letter}
                          isSelected={selectedIds.has(letter.id)}
                          onToggle={handleToggle}
                      />
                  ))}
                  <hr />
                  <p>
                      <b>
                          You selected {selectedCount} letters
                      </b>
                  </p>
              </ul>
          </>
      );
  }


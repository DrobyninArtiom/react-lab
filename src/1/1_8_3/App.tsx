// 1_8_3 Fix a broken story tray - Fixed by creating a new array instead of mutating the prop array

export interface Story {
  id: string;
  label: string;
} 

const stories: Story[] = [];
export default function Wrapper(){
  return <StoryTray stories={stories}/>;
}

function StoryTray({ stories }: { stories: Story[] }) {
  const storiesWithCreate = stories.concat({
      id: 'create',
      label: 'Create Story',
  });

  return (
      <ul>
          {storiesWithCreate.map((story) => (
              <li key={story.id}>{story.label}</li>
          ))}
      </ul>
  );
}
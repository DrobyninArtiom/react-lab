// 2_2_4 Remove unnecessary state - Removed state and used prompt value directly since state update is asynchronous

export default function FeedbackForm() {

    function handleClick() {
        const name = prompt('What is your name?')??"";
        alert(`Hello, ${name}!`);
    }

    return <button onClick={handleClick}>Greet</button>;
}
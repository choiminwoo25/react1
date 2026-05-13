export default function Signup2() {
    return(
        <form onSubmit={e => {e.
            preventDefault();
            alert("submitting!");
        }}>
            <input/>
            <button>send2</button>
        </form>
    );
}
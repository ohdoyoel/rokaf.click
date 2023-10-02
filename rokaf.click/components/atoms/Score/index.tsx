interface ScoreProps {
    score: number;
}

export const Score = ({score}: ScoreProps) => {
    return (
        <p className="font-slab-bold" style={{fontSize:100}} >{score}</p>
    )
}
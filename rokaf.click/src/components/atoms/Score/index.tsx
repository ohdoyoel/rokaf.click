interface ScoreProps {
    score: number;
}

export const Score = ({score}: ScoreProps) => {
    return (
        <p className="font-slab-bold text-center" style={{fontSize:100}} >{score}</p>
    )
}
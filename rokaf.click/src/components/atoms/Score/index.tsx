interface ScoreProps {
    score: number;
}

export const Score = ({score}: ScoreProps) => {
    return (
        <p className="font-slab-bold text-center text-7xl">{score}</p>
    )
}
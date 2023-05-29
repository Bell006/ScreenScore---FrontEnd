export function Date_Time({data}) {
    const date_Time = data && data.created_at.split(" ");

    const date = date_Time[0]; 

    const timeWithSeconds = date_Time[1];
    const time = timeWithSeconds.slice(0, -3)

    return (
        <p data={data}>{date} às {time}</p>
    )
}
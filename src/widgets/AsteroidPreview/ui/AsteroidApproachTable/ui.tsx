import type { FC } from "react"
import type { TAsteroidApproachTable } from "@/widgets/AsteroidPreview/ui/AsteroidApproachTable/types.ts"
import getFullDateFormatted from "@/shared/utils/getFullDateFormatted"
import "./AsteroidApproachTable.scss"

const AsteroidApproachTable: FC<TAsteroidApproachTable> = (props) => {
  const {
    array,
  } = props

  return (
    <table className="asteroid-approach-table">
      <thead className="asteroid-approach-table__header">
      <tr className="asteroid-approach-table__row">
        <th className="asteroid-approach-table__label label">Скорость относительно Земли</th>
        <th className="asteroid-approach-table__label label">Время макс. сближения с Землей</th>
        <th className="asteroid-approach-table__label label">Расстояние до Земли</th>
        <th className="asteroid-approach-table__label label">Летит по орбите</th>
      </tr>
      </thead>
      <tbody className="asteroid-approach-table__body">
      {array?.map((element) => {
        const date = getFullDateFormatted(element.close_approach_date_full)
        const distance = Math.round(+element.miss_distance.kilometers).toLocaleString()
        const speed = Math.round(+element.relative_velocity.kilometers_per_hour).toLocaleString()

        return (
          <tr className="asteroid-approach-table__row" key={element.close_approach_date}>
            <th className="asteroid-approach-table__detail text">{`${speed} км/ч`}</th>
            <th className="asteroid-approach-table__detail text">{date}</th>
            <th className="asteroid-approach-table__detail text">{`${distance} км`}</th>
            <th className="asteroid-approach-table__detail text">{element.orbiting_body}</th>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default AsteroidApproachTable
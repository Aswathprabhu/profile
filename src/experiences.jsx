export default function Experiences(props) {
  let { place, timeline, doings } = props;
  return (
    <div className="mb-6">
      <h3 className="mb-1 uppercase">{place}</h3>
      <h4 className="mb-4 italic text-center sm:text-left">
        ({timeline})
      </h4>
      <ul className="list-disc ml-5">
        {
          doings.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
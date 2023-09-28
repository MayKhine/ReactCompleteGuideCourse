export const Concept = ({ title, desc, imageSrc, className }) => {
  return (
    <li className={className}>
      <img src={imageSrc} alt="TODO: TITLE" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  )
}

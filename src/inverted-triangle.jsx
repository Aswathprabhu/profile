import styles from './styles/inverted-triangle.module.css';

export default function InvertedTriangle({ className = '' }) {
  return (
    <div className="flex justify-center relative">
      <div className={`${styles.triangle} absolute ${className}`}></div>
    </div>
  )
}
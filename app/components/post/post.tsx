import { Props } from "./types"

function Post({ header, children }: Props) {
  return (
    <div>
      <h2>{header}</h2>
      <p>{children}</p>
    </div>
  )
}

export default Post
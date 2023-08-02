import type { NextPage } from "next"
import type { FormEvent } from "react"
import { useState } from "react"
import { AutoTokenizer, AutoModel } from "@xenova/transformers"

const IndexPage: NextPage = () => {
  const [text, setText] = useState<string>()
  const embed = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const tokenizer = await AutoTokenizer.from_pretrained(
      "intfloat/multilingual-e5-large"
    )
    const model = await AutoModel.from_pretrained(
      "intfloat/multilingual-e5-large"
    )
    const tokenized = tokenizer([text])
    console.info(tokenized)
  }
  return (
    <>
      <section
        style={{
          margin: "auto",
          maxWidth: "48rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Text embedding sample
        </h1>
        <br />
        <form onSubmit={embed}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              background: "#222",
              border: "none",
              display: "block",
              fontSize: "1.25rem",
              height: "12rem",
              padding: "1rem",
              width: "100%",
            }}
          />
          <button
            style={{
              background: "#212",
              border: "none",
              display: "block",
              fontSize: "1rem",
              padding: "1rem",
              width: "100%",
            }}
          >
            Embed
          </button>
        </form>
      </section>
    </>
  )
}

export default IndexPage

import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setIsPending(true)

            try {

                const res = await fetch(url, { signal: controller.signal })
                if (!res.ok) { 
                    throw new Error(res.statusText)
                }
                const json = await res.json()

                setIsPending(false) 
                setData(json.results)
                setError(null) 
            } catch (err) { 
                if (err.name === "AbortError") {
                    console.log("fetch was aborted")
                } else {
                    setIsPending(false)
                    setError("Could not fetch the data")
                }

            }
        }
        fetchData()


        return () => {
            controller.abort()
        }
    }, [url])

    return { data, isPending, error } 
}

export default useFetch;
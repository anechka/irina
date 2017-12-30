import bubbly from "./bubbly"

export default {
    loadBubbly() {
        bubbly({
            colorStart: "#6663e0",
            colorStop: "#3363e0",
            bubbleFunc: () => `hsla(0, 100%, 20%, ${Math.random() * 0.25})`
        })
    }
}
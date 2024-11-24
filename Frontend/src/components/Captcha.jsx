import { useState } from "react"

export default function Captcha() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="w-36 flex items-center pt-4 pb-2 px-2 border border-gray-300 rounded-md shadow-sm">
      <input
        type="checkbox"
        id="captcha"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-4 h-4 border-gray-300 rounded"
      />
      <label htmlFor="captcha" className="ml-2 text-sm">
        I'm not a robot
      </label>
    </div>
  )
}


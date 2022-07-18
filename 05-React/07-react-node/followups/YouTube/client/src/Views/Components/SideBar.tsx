import React, { useEffect } from 'react'

//mui icons
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

interface SideBarProps {
  setOpenSideBar: Function;
  openSideBar: Boolean;
  logedUserId: String;
  handleGotoMyVideos:Function;
}

const SideBar = (props: SideBarProps) => {
  const { setOpenSideBar, openSideBar, logedUserId, handleGotoMyVideos } = props;
  

  useEffect(() => {

    setOpenSideBar(true)

  }, [])

  return (
    <div className='comp__sideBar'>

      <div className="tab tab-logo">
        <MenuOutlinedIcon onClick={() => setOpenSideBar(!openSideBar)} className='icon' />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAABqCAMAAADDRQtiAAAAxlBMVEX/////AAAoKCgAAAAYGBgTExMdHR0ODg7w8PAjIyOSkpIgICAKCgrJycm8vLzBwcHj4+P4+Pja2tqzs7NhYWF7e3v/amrt7e1sbGz/Xl46OjrPz8//fX11dXX19fVWVlb/hYUtLS1NTU3/x8f/lZWbm5uqqqqMjIyDg4P/qan/srL/4+P/y8ugoKBHR0f/1NT/8fH/vb3/Nzf/i4v/nZ3/WVn/Ly//UVH/6+v/Fhb/k5P/QkL/4OBcXFz/JCT/Pz//cnL/Zmb2lDT9AAAPl0lEQVR4nO2dbUPaPBSGOwqFSlWKKAwmIvgCvoBuON2cz7b//6eeFtrk3GnSFppKmdyfNlrbJFeTnJycJIaRUq77cPtrNhuNHkc3k8nFxcW3wWDwxdfnUL9/s38uLng3fLu4mE8mN94fjWaz21vXddO+b6cc9fBye3czmQ9Onp5fv3/Spx/fX58//xnMJ493ty871O+s2c3Pk68/NOKMI/37z8/H2aZz/DF0N/jvfaCivn7b8c1Z83eqrVK8N5vO/YbU75wSdXq5vORxc2AX+u9j1t2aaRGZB3m84/OG0Xoa5JGvoqtWKRFVc2D7sJF+VtSzInXtfVAj8Y6m9gISXhCvVR6cO9uHTVMN9CpPXtN0iMzj6B33eIf+EjqEF8TKLK/y4NzZFqLW+lLU3HOb5N+eRm/o1GkJmfoHzvtOKa3s81UenDfbAvS1ob5JE3hs0QKo9CM3APz6me4C2l62N5sGSiW1lg+gZM3IQKFhAvt7zQVkbC/bTeME/ZYWQDWe3QFcN/WbUtvKdr5pnKiRLI1D2uZaHfHyuLx22abUlrLdoDdKJqk5dRkPD9FL7OjM2k62d5uGKepFksgedKhmG6+6Zo7ls9R2sv2yaZaiJrJUAj3nEC8K5Gtay2ep7WRbsCb506fPslR26CiovIcX72n5yIa/2bWVbIvikiKSJfMI8AkDWPBclC91Fk+oQ7NORft3T3DNKq3y4DzZFq67/fTpVpLMNo5g8SIUTx4jIK/Zb3WopgDX7qBWeXCebAs2AvL1KEsnlCbyQ8+FpbN0VAK7vVTJ4OPMk+3fTZOM6kKWzmtampUjegk8F9apztJRaQ/ZZrDe8mSrM9BNk/7K0gnGDA5hAXv1SPbXurUVbN1Ng5ToqyyhffBegC0MzbXTlv21bm0F25dNg5RJ2n29UWO4SqaCYqjnpq1gO9s0R5keZCm9ooXgkKkg8FyIQ9+ctBVsCzW/F0o6zwfWMJ0KUkLPUVvBtoBDIMUgyKCeqToZQ4LLytRYNjHaCraF8yb7kscqQ/CFzX8vEVOqvpLfYH1tBdsChdNwyQNrYBjLp4LAY1V5lxHQlrB9Xp/A019tMAX9kZcChVhlU0EK5ET9RrPZbGgdG70HW9dPdZpHtBueojFkWSIcT4y7nBwf0pkgwzgjjS+3h6nnIjICqh2Mp2ao7umVtKxclPIKuaBmm/JZ7IqCbXN8vkz08DLuo9zfa9kse517dKVnIHDi/flEG08qRZgydeLaw/BX6rkoX2POW07V4pdtq2IOo41eE6bv6i1+BcMrq2TWWMlWuMC7CLcEYl5vKdvm0CwH6bYr5lgBtjGum2U+6vez170kn1MGAieLJA+0EeX6Ic9LE3rWsMzojw4N6fcKCKKWlwVgdsV5oiZONVC2AMpJxRZREbYwL2izmSwZ2zEmvNKVNLiGe2zCpxc8t8xemWX29mT5iNsnbUyZ5GwN2VRQD/zM5Ku9l5Bd0hXCJJFtbvUWp3zZ2oMo2/4UfvKz1Y166ppWuSQVW3bxKwOAk/A1d9pDNxRs6Ug2LDbquaBcxmY022HusZErGFu3G62O5cjk1r5pR+4KnxHcnMXleMLfpLvblTodMfginAqiMReVK17GarQeXAjNKBjbYRRtNNy+GZc9Z2lnjjIAIGyNB70+EFnkhYFD2dAk7pIyM5kZfBiXd6GoCsV2fw/C6FmqhgaVKwb1CNlr6mTrte6v2sgqHMoiyJqImzurXEVfxG6k4WpFYlu+FPtawBVqHJ+/5ZeQZaoA2RrGo77VgHcKtnQsu7SJD4kpZbF+NCHvHidiTxWJbUnWIC/up6O7htgqibV40S5l6ShFthonHqTrRgwMvigv8FxGaBuCB8svYm9kL9AmUVWFYru8WK2KjO0uKQZMl2WeT+toWi3c6hda2RoPf/Jl61aE9IMpxZbdYqRaybmqGW3BuCIjz6KxLVvXBwdj0Q7mtoTRB2dLpeNfaU4jy1h/6mWrq9uVLi3w1SIoF70rnQN6C++C1bil6rJU0Lzifq2isXWWQ5iGUHPJx3hEzS0289WFyCIvrVm8SlK2XrerYbSrZEtHs/68ADWl2Hw9LiFhPyMpPqtQLLbVsGPdx4aGGxMYXcTygdGe41zYZmvol5JGsfqiVoTfvdIOmJmSWL4stAotEF4PCsWWrPkf2vIL4GXl7Y9bFX7OMixVsjUeTvJiS5tbf3EI6Vn5uAbiHnlLja0Wj2MuFFvSrV4JFnT4O0Tzkvgw+BYcNye2hjH7nYntQPlgUtw+HdL/sphlXLFJlgdh4AYzPIvElr5d8D2ZYfsDliKZ8IUwbe8byVLB4thmDLJTsz3kLY9fUUnhs6KH2QM6NYQVwQmBFIktjRvpozXFuhxqT9LYP1jN6GU7S0hNPNtMNriabZ8aT/027W7D7xoREofOvnxHlCKxhZga6EM4RfiZtOFgTFWucmVrvPxd99Ff1A8lvYrZIFWUGxXQNtGV1giRhzgUlS3Yw+xSH7PHozJ6Qj+cK1uv2/2qnS3pbaoHZGKI96tYJCSotQ31llkhhWUr7KoVTHIJ+y3xV+NM9jhLKFwatut2uzFsCYny/TXPPW97sSkjG/BhMTLbq7Bs8Vnht4g9S0XRLNU7RhZzNhXb9Ua7MWwNmv43UmDsBkUhisYJg1hYtug6DWcLwCtVsnlEBuTDPnsHtg/ruEfi2J7yAiezmHy4WoMSoT52ZMtiIgvLFo3C0DGFvxK20Fh7ucu9TV5voimO7ZF08poXCvaqMWxDX0dh2R4h28BxjLWZsMXZr27ettTdmlO6cWzb0h1j+LJbtDXUbFnxFpYt7mQYTgqM8QvlbHFLkPN82d6u3SrEsRVspSCLPOi8mZatKf2D4rINHMop2ZbyZJslcnkQ92AcvwZFxd2qvZRtcvHZokUcsj1NyzY/n2Om0MdB3JN7kkaZBLf9O2x7UradtGzzmivIuFJIvpAvlCSGkXgo0rNt79iuzvYl68pP9Ryfr1ZkwQDddTc929q/wJbf7gpsc5mbz75EKJ7tVSTEiE6ffCy2pSEXviEPtjp20FDG1CwUCeGEZbcfjK3NhWWiPxZu3dmBVdhGRkGw7PaDsVVKdwxr5o42kCqGNdBYyB5sPLRju5Tm2PMsrcAqbA+FURBsPLRju5TWNSMat6pSrRkJy0NwKdNltzu2gTSu9dLT0QZKOlJTCO9s0Ws7tkvpW6OZNWoVpVijyXSPJXhFr+3YLqVrbXX2aHOUYm01E3rRcVOmD8a2qjryUc+eCPpPRU5AK8zhfmS2dqOtkI69TGY6F1UHeh+27r/ANmY7/QwAFmx1rcoEKfYg0s3WKDhb+Rzfu7HNZxtXxd5hH42tMDcfLGxSzs1HlGnPP427IIAUe/6lY/uvxtSE0X7p2WYIhnvOYdOwpf68C9sw6rWwbIU4x1PZG+LYbtEeuynZtjF+Vx3nGF4pLFtYvMXik+9VMawRbdHe2CnZCrXTUl1hC3MLy1aIPQ8mRI6UbGsN3Ot3i/a0T8nWKIEI25q0jSsuW+xZQ+8bTpTQ7X0v/Z12691h63i8d9ks6FkUvzKxxdld9VqvcGOJwrJtSdfxCVs7ULaLd9t23bLK/raG23OGTGq2WCSmYlEFL/fCspWvv8VJMBpxQndM83ffKuLZT4mui3i2WLxk8TH6AtiC+qKydTHkj2UEdliiewHSyOXFzmqbBimR9My29GzR2CDz9niBffHCQgSyK2Z2tnxrwdXZCmFhrHM5gz0RyG7gsOe//+ZtOWsxPVtkRSYAwTbh29pgXC/dxnMNtvdS23YttoJBzGLC4N00wjPyu96JVy2aZ2OLsenkzFSY0edtb01RP4TzsNOxlfsbDHErAyVb8g60G/jRoWAoky3FoJ4v6nMBB0EJ0VKJbM+girDo7LaiPotuZtaIC5sApWIrrHzmK76vU7ElZ1cJTTJPL3yLxDcDn9Wid96SM8lXYYtjfnaEhGBjcSME7VFWE9q4LWQ6tsJiJSd8y4EQU63aO8xhrfiZYErx9OIR3uxThGwszrrIMoObkxLRJrAVjKPzvvRXfj/W87AU98W9xVOxFWpbODEX2WJfuZ+js9hW1eh3hN/J4hDwOrKKCyecBE63nOZy1leyKZXAVqiI9a7X97hHQptIjiyIhDtf9npXZ5HFC6nYigvRrOlRc3+vFN1IV8W2ZDnD8V7HEtJEj1rHzsWa7vcNt9eBIgla8DwO+MmkhEUFKdheYYyr7VSrjlCEZNup6C4LZcepLD4PqLrp2L4JC9Hsiuksz3ECWnF7Y9tWObKajR5OJNh4dtWpOg5+C8E2AoXzTL1kZusmhgKW6YH17UgVDVRv0Sqdju19lFXw51eQgBi2MhG3uLiJsOzuMHvaT/fJpudktElsjaOkzOPpiFNbfpfZoLZnOrbRhWhLef0iHYMp2NqKr7KCx3G3Ej5e1irlc6be2kpYU5CKrXEWn3kTj1I9km6PUqrugZsyHVvRvmWvbKJPUMq2fqqo9g5O04oHMojv4v6aQlXcxFipVGxrkaM34A/EY7Kkd1tDrIUp2e5Ly90vbuqzkrP1TKCu7NMwIbreiA6pMHukw9EfX5xBifN7qdgaDUdefRb3t8S7ZUVlLU44XJ2ttMFcHBNH9gdWsPUqd7sS/c7KkQQb9zFH0sGXWyC/Y7K/MR1bo91VGCm27MzRcaRVrkwXw2LSR6Zl65Yin5W5mCumjYCcrT+IbZyL+/BY9PyYUAeKoyTr4lGSOtdpZVJihGNqtr6/QLJZke2cH8puPsYzW+zwNErSR6ZlG/msys6ye+8n9bdLH7fbQWzOmTQmqvEmoWuZb+LxzQ8FcWCk6mwN3w6mK19MxSHt7WvLLJMhqn/471R1IP2B7YS32mVzGnryLk3pa65pAkyzJjxsbLKWtV4xj8PL5yb/k/DWmkneEFS53jBMt12vVsW+lqnXMsnRzXbdG5Z3etHbHgpRc59UuRDVb4BkR/8G2b9sdcvBmd31qeJM8kAHneUx4OXpNffd9uWvqWECIs9qXw6txcNKb1ccfFv2J/Q5rII27t/Oq6ZZPW8dxQQyGv2D8dC/z091921vX3FvHms/VtTPmFxkUL/W9NSoxRVSIP/OtvpLWUlu23tYmpeq1K/VUiWlX2s02/G3jjY8FPqaykLeaT1NNhiD8ZoYt7pTNs1+5rDgMlnP8+Qp25006Nfj/MvzO9nN358G89GO63vr4fbX6GYy/3Ly9Pz6XVtX/OP76/PTyWA+uRn9ekkMQ97pXeS67svtbHY3Gj16yCfzi4uLga8vC/39HOhk+f/FJe+W+cSD+Dga3c1mty/eIzadi4+k/wGIwbz9hD1h2QAAAABJRU5ErkJggg==" alt="" />
      </div>

      {openSideBar ?
        <>
          <div className="tab"><HomeIcon className='icon' /><h1>Home</h1></div>
          <div className="tab"><ExploreOutlinedIcon className='icon' /><h1>Explore</h1></div>
          <div className="tab"><SubscriptionsOutlinedIcon className='icon' /> <h1>Subscription</h1></div>
          <div className="tab" onClick={() => handleGotoMyVideos(logedUserId)}><SmartDisplayOutlinedIcon className='icon' /> <h1>Your Videos</h1></div>
          <div className="tab"><HistoryOutlinedIcon className='icon' /> <h1>History</h1></div>
          <div className="tab"><WatchLaterOutlinedIcon className='icon' /> <h1>Watch Later</h1></div>
          <div className="tab"><ThumbUpOutlinedIcon className='icon' /> <h1>Liked Videos</h1></div>
          <div className="tab"><ExploreOutlinedIcon className='icon' /><h1>Explore</h1></div>
          <div className="tab"><SubscriptionsOutlinedIcon className='icon' /> <h1>Subscription</h1></div>
          <div className="tab"><SmartDisplayOutlinedIcon className='icon' /> <h1>Library</h1></div>
          <div className="tab"><HistoryOutlinedIcon className='icon' /> <h1>History</h1></div>
        </>
        :

        <div className="tab-closed">
          <div className="tab"><HomeIcon className='icon' /></div>
          <div className="tab"><ExploreOutlinedIcon className='icon' /></div>
          <div className="tab"><SubscriptionsOutlinedIcon className='icon' /></div>
          <div className="tab"><SmartDisplayOutlinedIcon className='icon' /></div>
          <div className="tab"><HistoryOutlinedIcon className='icon' /></div>
        </div>

      }







    </div>
  )
}

export default SideBar
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import PcNotFound from "pc/routes/NotFound";
import PcMain from "pc/routes/Main";
import PcSignIn from "pc/routes/SignIn";
import PcSetting from "pc/routes/Setting";
import PcChannel from "pc/routes/Channel";
import PcSearch from "pc/routes/Search";

function App() {
	return (
		<div>
			<BrowserView>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PcMain />} />
						<Route path="/setting" element={<PcSetting />} />
						<Route path="/signin" element={<PcSignIn />} />
						<Route path="/channel" element={<PcChannel />} />
						<Route path="/search" element={<PcSearch />} />
						<Route path="*" element={<PcNotFound />} />
					</Routes>
				</BrowserRouter>
			</BrowserView>
			<MobileView>
				<h1>모바일 버전 개발중...</h1>
			</MobileView>
		</div>
	);
}

export default App;

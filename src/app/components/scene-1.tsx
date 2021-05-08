import { VideoPlayer } from "../../components/media/video-player";
import { ResponsiveDescription } from "../../components/responsive/responsive-description";
import { ResponsiveTitle } from "../../components/responsive/responsive-title";
import { UseRatio } from "../../modules/sizing/ratio";
import { ResponsiveComponent } from "../../modules/responsive/responsive";
import { UseNonUndefined } from "../../modules/var/non-undefined-content";

import { PageData } from "../data/scene-1.ts-data";
import { EditVideoLayoutStyle } from "../styles/styled/layouts";

import { UsePercentage } from "../../modules/sizing/percentage";
import React, { useEffect, useState } from "react";
import { ImageElement } from "../../components/media/image";
import { Parallax } from "react-scroll-parallax";

import "../styles/sass/scene.sass";
import { motion } from "framer-motion";
import { ResponsiveButton } from "../../components/responsive/responsive-button";
import { ResponsiveChilds } from "../../modules/responsive/childrens";
import { SharedData } from "../data/pages.any.ts-data";
import { ResponsiveValue } from "../../modules/responsive/value";

export const PageScript = (): JSX.Element => {
  const [VideoRatioHeight, setVideoRatioHeight] = useState<number>(
    ResponsiveValue(UseRatio(9 / 16, UsePercentage(20)).width, UseRatio(9 / 16, UsePercentage(50)).width)
  );

  const VerifiedPageValues = UseNonUndefined(SharedData.PageValues);
  const VerifiedPageText = UseNonUndefined(PageData.PageTexts);
  const VerifiedPageImages = UseNonUndefined(PageData.PageImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoRatioHeight(
        ResponsiveValue(UseRatio(9 / 16, UsePercentage(20)).width, UseRatio(9 / 16, UsePercentage(50)).width));
    }, 10);

    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return (
    <div {...PageData.PageData}>
      <div
        style={{
          height: "100vh",
          background: "whitesmoke",
        }}
      >
        <ResponsiveComponent
          style={{
            display: "grid",
            height: "100vh",
            gridTemplateColumns: "50% 50%",
            gridTemplateRows: "100vh",
          }}
          mobile_style={{
            display: "grid",
            height: "100vh",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "35% 65%",
          }}
        >
          <ResponsiveComponent
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
            }}
            mobile_style={{ width: "100%", height: "100%" }}
          >
            <ResponsiveComponent
              style={{ marginLeft: "5%" }}
              mobile_style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Parallax y={[-5, 15]}>
                <ResponsiveTitle>{VerifiedPageText.title}</ResponsiveTitle>
                <ResponsiveComponent
                  style={{ width: "40vw", marginTop: "2%" }}
                  mobile_style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "80%" }}>
                    <ResponsiveDescription>
                      {VerifiedPageText.subtitle}
                    </ResponsiveDescription>
                  </div>
                </ResponsiveComponent>
                <ResponsiveChilds>
                  <motion.div
                    initial={{
                      width: "98%",
                      padding: "0.5vw",
                      display: "flex",
                    }}
                  >
                    <div style={{ marginRight: "5%" }}>
                      <ResponsiveButton
                        handleClick={() =>
                          window.location.assign(
                            "https://github.com/franndjoo/portfolio-v3"
                          )
                        }
                      >
                        {VerifiedPageText.buttonGithub}
                      </ResponsiveButton>
                    </div>
                    <ResponsiveButton
                      handleClick={() =>
                        document.getElementsByName("form")[0].scrollIntoView({
                          behavior: "smooth"
                        })
                      }
                    >
                      {VerifiedPageText.buttonMail}
                    </ResponsiveButton>
                  </motion.div>
                  <div />
                </ResponsiveChilds>
              </Parallax>
            </ResponsiveComponent>
          </ResponsiveComponent>
          <ResponsiveComponent
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            mobile_style={{
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Parallax y={[-20, 17.5]}>
              <ImageElement
                image={VerifiedPageImages[1]}
                MotionImageStyle={{
                  initial: EditVideoLayoutStyle.initialBlock([
                    { edit: "x", value: "10%" },
                    { edit: "y", value: "-2.5%" },
                    { edit: "height", value: VideoRatioHeight },
                  ]),
                  animate: {
                    height: VideoRatioHeight
                  }
                }}
              />
            </Parallax>
            <Parallax y={[-20, 17.5]}>
              <ImageElement
                image={VerifiedPageImages[2]}
                MotionImageStyle={{
                  initial: EditVideoLayoutStyle.initialBlock([
                    { edit: "height", value: VideoRatioHeight },
                    { edit: "x", value: "-10%" },
                    { edit: "y", value: "2.5%" },
                  ]),
                  animate: {
                    height: VideoRatioHeight,
                  }
                }}
              />
            </Parallax>
          </ResponsiveComponent>
        </ResponsiveComponent>
      </div>
    </div>
  );
};

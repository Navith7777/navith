import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        ɪ ᴀᴍ ᴀ ʙ.ᴛᴇᴄʜ ɪᴛ ꜱᴛᴜᴅᴇɴᴛ ᴀᴛ ꜰʀᴀɴᴄɪꜱ xᴀᴠɪᴇʀ ᴇɴɢɪɴᴇᴇʀɪɴɢ ᴄᴏʟʟᴇɢᴇ, ꜱᴘᴇᴄɪᴀʟɪᴢɪɴɢ ɪɴ ᴡᴇʙ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ, ᴜɪ/ᴜx, ᴘʏᴛʜᴏɴ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ, ᴄᴀᴘᴄᴜᴛ ᴠɪᴅᴇᴏ ᴇᴅɪᴛɪɴɢ, ᴀɴᴅ ᴘʜᴏᴛᴏɢʀᴀᴘʜʏ.

ᴍʏ ᴀᴄᴀᴅᴇᴍɪᴄ ᴊᴏᴜʀɴᴇʏ ʜᴀꜱ ᴇqᴜɪᴘᴘᴇᴅ ᴍᴇ ᴡɪᴛʜ ᴀ ꜱᴛʀᴏɴɢ ꜰᴏᴜɴᴅᴀᴛɪᴏɴ ɪɴ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴀɴᴅ ᴀ ᴅɪᴠᴇʀꜱᴇ ꜱᴋɪʟʟ ꜱᴇᴛ. ᴘʀᴏꜰɪᴄɪᴇɴᴛ ɪɴ ᴅᴇꜱɪɢɴɪɴɢ ᴀɴᴅ ᴅᴇᴠᴇʟᴏᴘɪɴɢ ᴡᴇʙ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴꜱ, ɪ ʜᴀᴠᴇ ᴀ ᴋᴇᴇɴ ɪɴᴛᴇʀᴇꜱᴛ ɪɴ ᴄʀᴇᴀᴛɪɴɢ ɪɴᴛᴜɪᴛɪᴠᴇ ᴜꜱᴇʀ ɪɴᴛᴇʀꜰᴀᴄᴇꜱ.

ᴍʏ ᴘʀᴏꜰɪᴄɪᴇɴᴄʏ ɪɴ ᴘʏᴛʜᴏɴ ᴀʟʟᴏᴡꜱ ᴍᴇ ᴛᴏ ᴀᴘᴘʀᴏᴀᴄʜ ᴘʀᴏʙʟᴇᴍ-ꜱᴏʟᴠɪɴɢ ᴡɪᴛʜ ᴀ ʟᴏɢɪᴄᴀʟ ᴍɪɴᴅꜱᴇᴛ. ᴀᴅᴅɪᴛɪᴏɴᴀʟʟʏ, ᴍʏ ᴄʀᴇᴀᴛɪᴠᴇ ꜱᴋɪʟʟꜱ ᴇxᴛᴇɴᴅ ᴛᴏ ᴠɪᴅᴇᴏ ᴇᴅɪᴛɪɴɢ ᴜꜱɪɴɢ ᴄᴀᴘᴄᴜᴛ ᴀɴᴅ ᴄᴀᴘᴛᴜʀɪɴɢ ᴍᴏᴍᴇɴᴛꜱ ᴛʜʀᴏᴜɢʜ ᴘʜᴏᴛᴏɢʀᴀᴘʜʏ. ᴀʟᴛʜᴏᴜɢʜ ɪ ʜᴀᴠᴇɴ'ᴛ ʜᴀᴅ ꜰᴏʀᴍᴀʟ ɪɴᴛᴇʀɴꜱʜɪᴘ ᴏʀ ᴄᴏᴍᴘᴀɴʏ ᴇxᴘᴇʀɪᴇɴᴄᴇ, ᴍʏ ᴀᴄᴀᴅᴇᴍɪᴄ ᴘᴜʀꜱᴜɪᴛꜱ ʜᴀᴠᴇ ᴘʀᴏᴠɪᴅᴇᴅ ᴍᴇ ᴡɪᴛʜ ᴀ ꜱᴏʟɪᴅ ɢʀᴀꜱᴘ ᴏꜰ ᴛʜᴇꜱᴇ ꜱᴋɪʟʟꜱ, ᴀɴᴅ ɪ ᴀᴍ ᴇᴀɢᴇʀ ᴛᴏ ᴀᴘᴘʟʏ ᴛʜᴇᴍ ɪɴ ᴀ ᴘʀᴏꜰᴇꜱꜱɪᴏɴᴀʟ ꜱᴇᴛᴛɪɴɢ.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

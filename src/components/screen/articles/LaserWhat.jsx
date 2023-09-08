import styles from "./LaserWhat.module.sass";

const LaserWhat = () => {
  return (
    <div className={styles.whatLaser}>
      <div className={styles.explanation}>
        <h1>Что такое лазерная коррекция зрения? </h1>
        <p>
          Лазерная коррекция зрения — это быстрая и безболезненная процедура,
          восстанавливающая зрение. Несколько секунд бережного воздействия
          лазером — и вы увидите мир отчетливо и ярко.
        </p>
        <p>
          Цель лазерной коррекции зрения — увеличить остроту зрения без
          коррекции очками или контактными линзами при близорукости,
          дальнозоркости, астигматизме и их сочетаниях. Операцию проводят на
          роговице. Суть вмешательства заключается в изменении оптической силы
          роговицы путем ее истончения в центральной зоне с помощью эксимерного
          или фемтосекундного лазера.
        </p>
      </div>
      <div className={styles.imgWrapper}>
        <img src="/img/articleWhatLaser.png" alt="Беседа" />
      </div>
    </div>
  );
};

export default LaserWhat;
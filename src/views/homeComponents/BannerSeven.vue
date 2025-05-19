<template>
  <div class="banner7">
    <div class="list-d-6">
      <img src="@/assets/headset-fill-2.png" alt="" />
      <div style="text-align: center">
        <p>法规是怎么说的？</p>
        <p>
          根据意大利《2019年预算法》第145条和意大利税务局2020年1月起生效的电子发票规定，所有企业和个体经营者均须通过SDI系统Sistema
          di Interscambio进行电子发票Fattura Elettronica传输，并使用认证税控设备Registratore
          Telematico完成电子小票Scontrino Elettronico的实时生成和传送。
        </p>
      </div>
    </div>
    <div class="list-f-6">
      <img src="@/assets/headset-fill-3.png" alt="" />
    </div>
    <div class="list-d-6" style="margin-top: 0">
      <div style="text-align: center">
        <p style="padding: 0 20%">Scontrino Elettronico与POS端Scambio Importo合规说明</p>
        <p>
          意大利零售及POS终端交易同样受到严格财政监管，依据意大利税务局规定，所有零售交易必须通过认证的RT设备即Registratore
          Telematico生成电子小票（Scontrino Elettronico）并实时传送至税务局
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner7 {
  .list-f-6 {
    width: 1280px;
    margin: auto;
    padding: 150px 0;
    > img {
      width: 100%;
    }
  }
  .list-d-6 {
    margin-top: 160px;

    > div {
      background-color: #1b1b1b;
      padding: 80px 40px;
      color: #fff;
      margin-top: -5px;
      > p {
        margin: 0;
        padding: 0;
      }

      > p:first-child {
        font-size: 52px;
        font-weight: bold;
      }

      > p:last-child {
        padding: 0 15%;
      }
    }

    img {
      width: 100%;
    }
  }
}
</style>

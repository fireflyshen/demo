<template>
  <div class="folder">
    <div class="folder-summary">
      <div class="folder-summary__start">
        <button class="folder-collapse-button">
          <svg
            id="js_folder-collapse-button-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-up"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
        <div class="folder-summary__file-count">
          <span class="folder-summary__file-count__amount">3</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-folder"
          >
            <path
              d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="folder-summary__details">
        <div class="folder-summary__details__name">Portfolio</div>
      </div>
      <div class="folder-summary__end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
          />
        </svg>
      </div>
    </div>
    <div class="folder-content"></div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss">
.folder {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  overflow: hidden;
  width: 450px;
}

.folder-summary {
  padding: 15px 20px 15px 15px;
  cursor: pointer;
  display: flex;
  line-height: 1;
  height: 80px;
  position: relative;

  &__start {
    position: relative;
  }

  &__file-count {
    position: absolute;
    top: -3px;

    &__amount {
      color: #ffffff;
      font-size: 12px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    svg {
      color: #5166fa;
      height: 30px;
      width: auto;
    }
  }

  &__details {
    padding: 2px 0 0 13px;


    &__name {
      color: #393738;
      font-size: 20px;
      font-weight: 500;
    }

    &__share {
      align-items: center;
      color: #b5b4b5;
      display: flex;
      font-size: 15px;
      margin-top: 8px;
    }
  }

  &__end {
    margin-left: auto;

    svg {
      fill: #c3c2c3;
    }
  }

  &::after {
    background: #e6e6e6;
    bottom: -2px;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    right: 0;
  }
}


.folder-collapse-button {
  appearance: none;
  background: transparent;
  border-radius: 30px;
  border: 0;
  cursor: pointer;
  height: 30px;
  opacity: 0;
  outline: none;
  position: relative;
  width: 30px;
  z-index: 1;

  &::after {
    background: #efeff0;
    border-radius: 40px;
    content: "";
    height: 35px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-out;
    width: 35px;
  }

  &:hover::after {
    opacity: 1;
  }

  svg {
    color: #9c9c9e;
    left: 50%;
    position: absolute;
    stroke-width: 3;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
}
</style>
